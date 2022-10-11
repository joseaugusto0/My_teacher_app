import { Button } from "@mui/material";
import { Teacher } from "../../@types/Teacher";
import { FormatterService } from "../../services/FormatterService";
import { Description, Infos, ListItem, Name, NullList, Photo, StyledLists, Value } from "./List.style";

interface PropsList {
    teachers: Teacher[],
    onSelect: (teacher:Teacher) => void
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
                            <Value>{FormatterService.monetaryValue(teacher.hour_value)} por hora</Value>
                            <Description>{FormatterService.limitDescription(teacher.description)}</Description>
                            <Button sx={{width: '70%'}} onClick={() => props.onSelect(teacher)}>Book Class with {teacher.name}</Button>
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