import { MainDisplay } from './components/main/MainDisplay.js'
import {Nav} from './components/nav/Nav.js'
import { Sidebar } from './components/sidebar/Sidebar.js'

export const Blog = (props) => {
  return (<>
    <Nav/>
    <div className="blog">
      <MainDisplay/>
      <Sidebar/>
    </div>
    </>
  );
}

