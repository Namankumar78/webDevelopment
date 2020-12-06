import Card from "./Card";
const Data = [
    {   
        key: 1,
        imgSrc: "https://source.unsplash.com/300x400/?girl",
        title: "Title 1",
        names: "Name 1",
        link: "https://atlantic24buy7.com/"
    },
    {
        key: 2,
        imgSrc: "https://source.unsplash.com/300x400/?nature",
        title: "Title 2",
        names: "Name 2",
        link: "https://atlantic24buy7.com/"
    },
    {
        key: 3,
        imgSrc: "https://source.unsplash.com/300x400/?water",
        title: "Title 3",
        names: "Name 3",
        link: "https://atlantic24buy7.com/"
    },
    {
        key: 4,
        imgSrc: "https://source.unsplash.com/300x400/?baby",
        title: "Title 4",
        names: "Name 4",
        link: "https://atlantic24buy7.com/"
    },
    {
        key: 5,
        imgSrc: "https://source.unsplash.com/300x400/?color",
        title: "Title 5",
        names: "Name 5",
        link: "https://atlantic24buy7.com/"
    }
]

const ncard = (val) => {
    return (
      <Card
      key= {val.key}
      imgSrc={val.imgSrc}
      title={val.title}
      names={val.names}
      link={val.link}
    />
    )
  }

export { Data, ncard };