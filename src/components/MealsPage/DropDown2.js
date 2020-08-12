import React from 'react';
import Dropdown from 'react-dropdown-aria';

export default function DropDown(){
    return(
        <Dropdown
        ...
        options: {[
          { value: 'one' },
          { value: 'two' },
          { value: 'three' }
        ]}
      />
    )
}