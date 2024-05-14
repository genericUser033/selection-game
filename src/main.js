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
import {ImgBox, ImgContainer} from "./styled";

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
    const [round, setRound] = useState(0);
    const [winners, setWinners] = useState(null);

    useEffect(() => {
        setNextRoundCandidates(candidates
            .map((c) => {
                return { key: c.key, name: c.name, src: c.src, order: Math.random() };
            })
            .sort((l, r) => {
                return l.order - r.order;
            })
        );
    }, []);

    const handleClick = (e) => {
        setRound(round + 1);
        setWinners(prev => [...prev, e]);
        setNextRoundCandidates((prev) => {
            const temp = prev.splice(0, 2)
            return prev.filter((el, i) => el.key !== temp.key)
        });
    }
    return (
        nextRoundCandidates.map((e, i) => {
            if(i>1) {
                return;
            };
            return (
                <ImgContainer onClick={(e) => {
                    handleClick(e);
                }}>
                    <ImgBox src={e.src} />
                    {e.name}
                </ImgContainer>

            )
        })
    )
}


export default Main;