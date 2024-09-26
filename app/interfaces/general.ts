export type ItemData = {
    title: string;
    description: string;
  };
  
  export type ScrollingCardData = {
    text: string;
    icon: any;
  };
  
  export type ToggleCardData = {
    pix: any;  
    name: string;
    age: string;
    detail1: string;
    detail2: string;
    detail3: string;
    detail4: string;
  };
  
  export type DataResponse = {
    itemData: ItemData[];
    scrollingCardData: ScrollingCardData[];
    toggleCardData: ToggleCardData[];
  };

  export interface HomePageProps {
    itemData: ItemData[];
    scrollingCardData: ScrollingCardData[];
    toggleCardData: ToggleCardData[];
  }

  export interface BodyComponentProps {
    itemData: ItemData[];
    scrollingCardData: ScrollingCardData[];
    toggleCardData: ToggleCardData[];
  }