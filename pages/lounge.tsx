export function getStaticProps() {
  return {
    props: {
      title: "Witcher's Lounge",
    },
  };
}

export default function Lounge() {
  return <p>You need to own some NFTs to access the lounge!</p>;
}
