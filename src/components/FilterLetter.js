//PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J
import React from 'react'

function FilterLetter() {
    const  userData= [
        { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
        { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
        { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

    ]
    return (
        <div>
            {userData.filter(names=>names.name.includes("J")).map(filteredName=><div key={filteredName.id}>Id:{filteredName.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:{filteredName.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Type:{filteredName.user_type}</div>)}
        </div>
    )
}

export default FilterLetter