import Robotlist from './components/Robotlist';
import SearchBox from './components/SearchBox';
import { robots } from './robots';
import { useState } from 'react';
import './app.css';
import Scroll from './components/Scroll';

const App = () => {
  const [searchField, setSearchField] = useState('');

  const onSearchChange = e => setSearchField(e.target.value);



const data = ['name', 'username', 'email']

const filteredRobots = robots.filter((robot) => data.some(entry => robot[entry].toLowerCase().includes(searchField.toLowerCase())))
 
   return (
    <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <Robotlist  roboFilter={filteredRobots}/>
        </Scroll>
    </div>
  )
}

export default App