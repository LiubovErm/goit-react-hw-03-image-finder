import { fetchPictures } from '../../services/images-api';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Box } from '../Box/Box';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class MakeImageGallery extends Component {
  state = {
    images: [],
    largeImage: '',
    page: 1,
    status: Status.IDLE,
    error: null,
    showModal: false,
    showBtnLoadMore: false,
    showLoader: false,
  };

  componentDidUpdate = prevProps => {
    const prevImage = prevProps.imagesName;
    const nextImage = this.props.imagesName; 
      
    if (prevImage !== nextImage) {
      this.setState({ status: Status.PENDING, page: 1, showLoader: true }, () => {
        const page = this.state.page;

          fetchPictures(nextImage, page)
              .then(images => {
                   if (images.totalHits !== 0) {
                     toast.success(`Hooray! We found ${images.totalHits} images.`, { theme: "colored" });
                     this.setState({showBtnLoadMore: true });
                      } else {
                     toast.error('Sorry, there are no images matching your search query. Please try again.', { theme: "colored" });
                     this.setState({showBtnLoadMore: false });
                     }
                   if (images.totalHits <= 12) {
                     this.setState({showBtnLoadMore: false});}
                 
                  this.setState({
                  images: [...images.hits],
                  status: Status.RESOLVED,
                  showLoader: false,
                  });
              })
             .catch(error => this.setState({ error, status: Status.REJECTED }));
      });
    }
  };

  onNextPage = () => {
        
    this.setState(
      prevState => ({page: (prevState.page += 1),}),() => {
        this.setState({ status: Status.PENDING, showLoader: true });
        const page = this.state.page;
        const nextImage = this.props.imagesName;
        
        fetchPictures(nextImage, page)
          .then(images => {
              if (page === Math.ceil(images.totalHits / 12)) {
                  toast.info("We're sorry, but you've reached the end of search results.", { theme: "colored" });
                  this.setState( {showBtnLoadMore: false});
              }
             
            this.setState(prevState => ({
                images: [...prevState.images, ...images.hits],
                status: Status.RESOLVED,
                showLoader: false,
            }));
          })
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }
    );
  };

  openModal = url => {
    this.setState({ largeImage: url});
    this.toggleModal();
    };
    
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
    
  render() {
   const { status, images, largeImage, showModal, showBtnLoadMore, showLoader } = this.state;

    if (status === 'pending') {
      return (
        <Box maxWidth={1500} mx='auto'>
          <ImageGallery images={images} onImageClick={this.openModal}
          />
          {showBtnLoadMore && (<Button nextPage={this.onNextPage} />
          )}
          {showLoader && (<Loader />)}
        </Box>
      );
    }

    if (status === 'resolved') {
      return (
        <Box maxWidth={1500} mx='auto'>
          {showLoader && (<Loader />)}
          <ImageGallery images={images} onImageClick={this.openModal}
          />
          {showModal && (<Modal largeImage={largeImage} onClose={this.toggleModal}
              />
          )}
          {showBtnLoadMore && (<Button nextPage={this.onNextPage} />
          )}
        </Box>
      );
    }
  }
}

