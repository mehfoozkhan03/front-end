import React from 'react'

export const Timer = () => {
    const [time, setTime] = React.useState(0);


    React.useEffect(() => {
        let id = setInterval(() => {
            setTime(time + 1)
            console.log("this is me ", time)
        }, 1000)

        // clean-up function
        return () => clearInterval(id)
    })




    return (
        <h4>Timer {time}</h4>
    )
}
