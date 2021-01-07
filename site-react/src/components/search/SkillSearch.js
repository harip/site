import React, { useContext } from 'react';  
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ProfileContext from '../../context/ProfileContext';
import Fuse from 'fuse.js';
import Experience from '../experience/Experience';

const SkillSearch = (props) =>{   
  const {profile} = useContext(ProfileContext); 
  const { open, onClose, searchTerm } = props;
  const searchOptions = {
    includeScore: true,
    includeMatches: true,
    findAllMatches: true,
    shouldSort: false,
    ignoreLocation: true, // https://fusejs.io/concepts/scoring-theory.html
    keys: ['projects.responsibilities']
  } 

  const search = () => {
    if (searchTerm === '') {
      return null;
    }
    searchOptions.minMatchCharLength=searchTerm.length;
    const fuse = new Fuse(profile.experience, searchOptions); 
    const result = fuse.search(searchTerm)[0]; 

    if (!result) { 
      onClose();
    } else {
      return (
        <Experience key={0} experienceItem={result.item} highlighters={result.item.matches}/> 
      );
    }
  };

  return( 
    <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={onClose}>
      <DialogTitle id="simple-dialog-title">{searchTerm } Experience</DialogTitle>      
      <div>{search()}</div>
    </Dialog>
  )
};

export default SkillSearch;