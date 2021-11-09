import { combineReducers } from 'redux';
import blogReducer from './BlogReducer';
import workReducer from './WorkReducer';
import galleryReducer from './GalleryReducer';
import VideoReducer from './VideoReducer';
import ReviewReducer from './ReviewReducer';
import clientsReducer from './ClientsReducer';
import mailerReducer from './MailerReducer';
import TechnologyReducer from './TechnologyReducer';
import careerReducer from './CareerReducer';
import CounterReducer from './CounterReducer';
import ServiceReducer from './ServiceReducer';
import ContactReducer from './ContactReducer';
const rootReducer = combineReducers({
  blogReducer,
  workReducer,
  galleryReducer,
  VideoReducer,
  ReviewReducer,
  clientsReducer,
  mailerReducer,
  TechnologyReducer,
  careerReducer,
  CounterReducer,
  ServiceReducer,
  ContactReducer,
});

export default rootReducer;
