import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../container/pages/About/About';
import Blog from '../container/pages/Blog/Blog';
import Career from '../container/pages/Career/Career';
import Contact from '../container/pages/Contact/Contact';
import Home from '../container/pages/Home/Home';
import Industry from '../container/pages/Industry/Industry';
import SingleBlog from '../container/pages/SingleBlog/SingleBlog';
import IndustryDetails from '../container/pages/SingleIndustry/IndustryDetails';
import WorkDetails from '../container/pages/WorkDetailPage/WorkDetails';
import WorkProcess from '../container/pages/WorkProcess/WorkProcess';
import Works from '../container/pages/Works/Works';

const Router = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/blog' exact component={Blog} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/our-works' exact component={Works} />
      <Route path='/industry' exact component={Industry} />
      <Route path='/work-details/:slug' exact component={WorkDetails} />
      {/* <Route path='/career' exact component={Career} /> */}
      <Route path={`/blog-details/:slug`} exact component={SingleBlog} />
      <Route path='/industry-details' exact component={IndustryDetails} />
      <Route path='/work-process' exact component={WorkProcess} />
    </Switch>
  );
};

export default Router;
