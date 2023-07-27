import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "MERN Stack Developer",
                    "Laravel Developer",
                    "Cat Lover"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
