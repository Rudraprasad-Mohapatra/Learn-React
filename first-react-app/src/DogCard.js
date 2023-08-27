import Image from "./Image"
export default function DogCard(props) {
    return (
        <div>
            <h3>
                {props.name}
            </h3>
            <Image src={props.src}/>
            <Image src="https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/304785738_498648442267261_2567716239007248064_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=YxEGcshJp50AX8Dqt6p&_nc_ht=scontent.fbbi2-1.fna&oh=00_AfBX3J5WIBB3Qyc_Yx5M0CvfwhL0Ed9CkTQZ8vphzLhblg&oe=64F0BB5D"/>
        </div>
    );
}