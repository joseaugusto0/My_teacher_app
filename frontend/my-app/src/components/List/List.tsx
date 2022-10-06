import { Button } from "@mui/material";
import { Teacher } from "../../@types/Teacher";
import { Description, Infos, ListItem, Name, NullList, Photo, StyledLists, Value } from "./List.style";

interface PropsList {
    teachers: Teacher[],
}

const List = (props: PropsList) => {
    return (
        <>
            {props.teachers.length>0 ? (
                <StyledLists>
                {props.teachers.map((teacher) => (
                    <ListItem key={teacher.id}>
                        <Photo src={teacher.photo}/>
                        <Infos>
                            <Name>{teacher.name}</Name>
                            <Value>{teacher.hour_value.toLocaleString('pt-BR', {minimumFractionDigits:2, style: 'currency', currency: 'BRL'})} por hora</Value>
                            <Description>{teacher.description}</Description>
                            <Button sx={{width: '70%'}}>Book Class with Zézão</Button>
                        </Infos>
                    </ListItem>
                ))}

                
            </StyledLists>
            ) : (
                <NullList>Any teacher registered</NullList>
            )
            
            }
            
        </>
    )
}

export default List;