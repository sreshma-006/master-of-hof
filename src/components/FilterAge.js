//PROGRESSION 5 | FILTER DATA BASED ON AGE
import React from 'react'

function FilterAge() {
    const  userData= [
        { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
        { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
        { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

    ]
    return (
        <div>
            {userData.filter(person=>person.age>28&&person.age<=50).map(filteredPerson=>(<div
                key={filteredPerson.id}>Id:{filteredPerson.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:{filteredPerson.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                User Type:{filteredPerson.user_type}

            </div>))}
        </div>
    )
}

export default FilterAge