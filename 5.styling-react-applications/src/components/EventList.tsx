import styles from './EventList.module.css'

export default function EventList(props: any) {
  return (
    <div>
        {props.events.map((event: any, index: number) => { //run righthand of && if lefthand is true, called "logical and"
            return (
                <div className={styles.card} key={event.id}> {/* you need to give each item an unique key value (id) */}
                {/* by doing styles.card i can scope the card class to only this component and it not affecting other components
                    css modules are scoped to the components they are referenced in
                */}
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => props.handleClick(event.id)}>Delete event</button> {/* handleClick 2 */}
                    {/* its an anonymous function, it wont be called directly, it will be called once the button is pressed */}
                </div>
            );
        })}
    </div>
  )
}
