import Image from 'next/image';

interface Props {
    src: string;
    alt: string;
}

const MyImage: React.FC<Props> = ({ src, alt }) => (
    <Image src={src} alt={alt} width={500} height={500} />
);
