import React from 'react'

export default function EventList(props: any) {
  return (
    <div>
        {props.events.map((event: any, index: number) => { //run righthand of && if lefthand is true, called "logical and"
            return (
                < React.Fragment key={event.id}> {/* you need to give each item an unique key value (id) */}
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => props.handleClick(event.id)}>Delete event</button> {/* handleClick 2 */}
                    {/* its an anonymous function, it wont be called directly, it will be called once the button is pressed */}
                </React.Fragment>
            );
        })}
    </div>
  )
}
