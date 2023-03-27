import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
    className?:string;
    closeOnClick?:Boolean
}

const MyImage: React.FC<Props> = ({ src, alt ,className,closeOnClick}) => {
    function handleCloseClick() {
        const shouldClose = window.confirm('Do you want to leave?');
        if (shouldClose) {
            window.location.href = 'https://www.google.com'; // Replace this with the URL you want to navigate to
        }
    }
    return (
        <Image src={src} alt={alt} width={500} height={500} className={className} onClick={closeOnClick? handleCloseClick:()=>{}} />
    )
}

export default MyImage