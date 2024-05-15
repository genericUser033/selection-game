import {useEffect, useState} from "react";
import p1 from "././asset/images/b1ls41qi.png";
import p2 from "././asset/images/Banh-Chung-2.webp";
import p3 from "././asset/images/Banh-Cuon.webp";
import p4 from "././asset/images/Banh-Khot.webp";
import p5 from "././asset/images/Bo-La-Lot.webp";
import p6 from "././asset/images/Bun-Banh-Tam-or-Banh-Tam-Bin.webp";
import p7 from "././asset/images/Bun-Bo-Hue-BTM.webp";
import p8 from "././asset/images/Bun-Bo-Nam-Bo-2-1.webp";
import p9 from "././asset/images/Bun-Cha.webp";
import p10 from "././asset/images/Bun-Rieu-2.webp";
import p11 from "././asset/images/Com-Tam-18.webp";
import p12 from "././asset/images/fresh-roll-finished.webp";
import p13 from "././asset/images/HAF-Banh-Mi-Phuong.webp";
import p14 from "././asset/images/HAF-Cao-Lau-Dish.webp";
import p15 from "././asset/images/Hue-Banh-Beo_.webp";
import p16 from "././asset/images/Hue-com-hen.webp";
import {Game, GameContainer, ImgBox, ImgContainer, Round} from "./styled";
import {useContext} from "react";
import {RankingContext} from "./App";
import {useNavigate} from "react-router-dom";
import {logDOM} from "@testing-library/react";

const candidates = [
    {
        id: 1,
        name: "b1ls41qi",
        src: p1
    },
    {
        id: 2,
        name: "Banh-Chung",
        src: p2
    },
    {
        id: 3,
        name: "Banh-Cuon",
        src: p3
    },
    {
        id: 4,
        name: "Banh-Khot",
        src: p4
    },
    {
        id: 5,
        name: "Bo-La-Lot",
        src: p5
    },
    {
        id: 6,
        name: "John",
        src: p6
    },
    {
        id: 7,
        name: "John",
        src: p7
    },
    {
        id: 8,
        name: "John",
        src: p8
    },
    {
        id: 9,
        name: "John",
        src: p9
    },
    {
        id: 10,
        name: "John",
        src: p10
    },
    {
        id: 11,
        name: "John",
        src: p11
    },
    {
        id: 12,
        name: "John",
        src: p12
    },
    {
        id: 13,
        name: "John",
        src: p13
    },
    {
        id: 14,
        name: "John",
        src: p14
    },
    {
        id: 15,
        name: "John",
        src: p15
    },
    {
        id: 16,
        name: "John",
        src: p16
    }

];


export const Main = () => {
    const [nextRoundCandidates, setNextRoundCandidates] = useState(candidates);
    const [game, setGame] = useState(candidates?.length);
    const [round, setRound] = useState(1);
    const [winners, setWinners] = useState([]);//for each round
    const {value, setValue} = useContext(RankingContext);
    const navigator = useNavigate();

    // let userInfo = useContext(UserContext);
    // userInfo.userId = "id";
    // console.log("id ", userInfo.userId);

    useEffect(() => {
        setNextRoundCandidates(
            candidates
            .map((c) => {
                return { id: c.id, name: c.name, src: c.src, order: Math.random() };
            })
            .sort((a, b) => {
                return a.order - b.order;
            })
        );
    }, []);// this will just be called once

    const handleClick = (e) => {
        console.log(e)
        setRound(round + 1);
        setWinners(prev => [...prev, e]);//[[a,b,c],e] => a,b,c,e => add the new selected to the winners list
        setNextRoundCandidates((prev) => {
            const temp = prev.splice(0, 2)//delete 2 elements starting from the index 0, just keep the one that haven't join yet
            return prev.filter((el, i) => el.id !== temp.id)//id=id, filter two joined candidate
        });
    }

    const rank = () => {
        if (value && value.length > 0) {
            setValue((prev) => {
                const temp = prev.map((e, i) =>
                    nextRoundCandidates[0].id === e.id ?
                        { id: e.id, name: e.name, src: e.src, score: e.score + 1 }
                        : { id: e.id, name: e.name, src: e.src, score: e.score }
                )
                return temp;
            })
        } else {
            console.log("here", winners)
            const temp = candidates.map((e, i) =>
                nextRoundCandidates[0].id === e.id ?
                    { id: e.id, name: e.name, src: e.src, score: 1 }
                    : { id: e.id, name: e.name, src: e.src, score: 0 }
            )
            setValue(temp)
        }
        navigator("/ranking");
    }

    useEffect(() => {
        if (game === 1) {

            console.log("last game!");
            rank();
            return;
        }
        if (nextRoundCandidates.length === 0) {
            setRound(1);
            setWinners([]);
            setNextRoundCandidates(winners);
            setGame((prev) => prev / 2)
        }
    }, [round]);// this will be called whenever round changes

    return (
        <>
            {
                game===1 ? <Game>Win</Game> : game===2 ? <Game>Final Round</Game> : <Game>{game}</Game>
            }
            {
                game >= 2 && <Round>{round}{" Round"}</Round>
            }
            <GameContainer>
                {nextRoundCandidates.map((element, i) => {
                    if (i > 1) {//just render index 0 and 1
                        return;
                    }
                    ;
                    return (
                        <ImgContainer onClick={() => {
                            handleClick(element);
                        }}>
                            <ImgBox src={element.src}/>
                            <hr />
                            {element.name}
                        </ImgContainer>

                    )
                })}
            </GameContainer>
        </>
    )
}


export default Main;