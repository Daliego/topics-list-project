import { useState } from 'react'
import { Topic } from "../../../models/topic"
import { ButtonInput } from "../buttonInput"
import { AiOutlineUser } from 'react-icons/ai'

interface ListItemsProps {
    topic: Topic
    onRemove: (id: string) => void
}

export const ListItem = ({topic, onRemove}: ListItemsProps) => {

    const [like, setLike] = useState<number>(topic.likes);
    // const [deslike, setDeslike] = useState<number>(0);

    // const [upStateLike, setUpStateLike] = useState(false)
    // const [upStatedesLike, setUpStatedesLike] = useState(false)

    const onLike = (likeNumber: number) => {
        setLike(Number(like) + likeNumber)
        console.log(like)
    }

    const handleRemove = () => {
        onRemove(topic.id)
    }

    return (
        <div  key={topic.id} className='items'>
            <div style={{display: 'flex', flexDirection: 'column', border: '1px', borderStyle: 'solid', borderRadius: '10px', borderColor: 'white', padding: '8px'}}>
                <div style={{display: 'flex', justifyContent: 'left', alignContent: 'start', flexDirection: 'row'}}>
                    <h4 style={{justifyContent: 'start'}}><AiOutlineUser /> {topic.autor.name}</h4>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', padding: '5px', justifyContent: 'flex-start'}}>
                    {topic.tags.map((tag)=> <div style={{border: '1px', borderStyle: 'solid', borderRadius: '10px', borderColor: 'white', padding: '10px', marginLeft: '10px'}}>{tag}</div>)}
                </div>
                <li style={{listStyle: 'none'}}>
                    {topic.name}
                </li>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <ButtonInput text="like" onClick={onLike} type='like'></ButtonInput> 
                    <p style={{color: like === 0 ? ('white') : (like > 0 ? '#0ee077' : '#ff0000')}}>{like > 0 ? `+${like}` : like}</p>
                    <ButtonInput text="deslike" onClick={onLike} type='deslike'></ButtonInput>
                    <button onClick={handleRemove} style={{height: 40}}>Excluir</button>
                </div>
            </div>
        </div>
    )    
}