//PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE
import React from 'react'

function UserType() {
    const  userData= [
        { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
        { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
        { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

    ]
    return (
        <div>
            {userData.filter(task=>task.user_type==='Designer').map(task=><div key={task.id}>Id:{task.id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:{task.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User type{task.user_type}</div>)}
        </div>
    )
}

export default UserType