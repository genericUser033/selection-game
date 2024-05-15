import React, {useContext, useEffect, useState} from "react";
import {RankingContext} from "./App";
import {Container, Contents} from "./style";

export const Ranking = () => {
    const {value, setValue} = useContext(RankingContext);
    const [contents, setContents] = useState(null)

    useEffect(() => {
        setContents(
            value?.sort((l, r) => {
                return r.score - l.score;
            })
        );
    }, [])

    return (
        <Container>
            {contents?.map((e, i) => {//contents here is value
                return (
                    <Contents>
                        {e.name} {" "} {e.score}
                    </Contents>
                )
            })}
        </Container>
    )
}

