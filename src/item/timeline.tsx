import {TimelineItems} from "../components/timeline";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TrainIcon from '@mui/icons-material/Train';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import haeunmaru from "../img/img_2021_10_09/haeun.jpeg";
import yeolcha from "../img/img_2021_10_09/yeolcha.jpeg";
import gobchang from "../img/img_2021_10_09/gobchang.jpeg";
import giuk from "../img/giuk.jpg";
import haeunmaru2 from "../img/img_2021_10_09/haeun2.jpeg";
import haeundae from "../img/img_2021_10_09/haeundae.jpeg";
import gwangan from "../img/img_2021_10_09/gwangan.jpeg";
import gwangan2 from "../img/img_2021_10_09/gangan2.jpeg";
import chimac from "../img/img_2021_10_09/chimac.jpeg";

const backgroundColor = "#FEF9EF";
const backgroundColor2 = "#e7efe4";
const wordColor = "#6b3525";
const wordColor2 = "#091a41";
const iconColor = "#6b3525";

const beachProps = {
  className: "vertical-timeline-element--work",
  contentStyle: {background: backgroundColor, color: wordColor, padding: ".5rem 2rem 2rem 2rem"},
  contentArrowStyle: {borderRight: '7px solid '+backgroundColor},
  iconStyle: {background: backgroundColor, color: iconColor},
  icon: <BeachAccessIcon/>,
}

const beachProps2 = {
  className: "vertical-timeline-element--work",
  contentStyle: {background: backgroundColor2, color: wordColor2, padding: ".5rem 2rem 2rem 2rem"},
  contentArrowStyle: {borderRight: '7px solid '+backgroundColor2},
  iconStyle: {background: backgroundColor2, color: iconColor},
  icon: <BeachAccessIcon/>,
}

const trainProps = {
  className: "vertical-timeline-element--work",
  contentStyle: {background: backgroundColor, color: wordColor, padding: ".5rem 2rem 2rem 2rem"},
  contentArrowStyle: {borderRight: '7px solid '+backgroundColor},
  iconStyle: {background: backgroundColor, color: iconColor},
  icon: <TrainIcon/>,
}

const meatProps = {
  className: "vertical-timeline-element--work",
  contentStyle: {background: backgroundColor, color: wordColor, padding: ".5rem 2rem 2rem 2rem"},
  contentArrowStyle: {borderRight: '7px solid '+backgroundColor},
  iconStyle: {background: backgroundColor, color: iconColor},
  icon: <RestaurantIcon/>,
}

const meatProps2 = {
  className: "vertical-timeline-element--work",
  contentStyle: {background: backgroundColor2, color: wordColor2, padding: ".5rem 2rem 2rem 2rem"},
  contentArrowStyle: {borderRight: '7px solid '+backgroundColor2},
  iconStyle: {background: backgroundColor2, color: iconColor},
  icon: <RestaurantIcon/>,
}

const sleepProps = {
  className: "vertical-timeline-element--work",
  contentStyle: {background: backgroundColor, color: wordColor, padding: ".5rem 2rem 2rem 2rem"},
  contentArrowStyle: {borderRight: '7px solid '+backgroundColor},
  iconStyle: {background: backgroundColor, color: iconColor},
  icon: <LocalHotelIcon/>,
}

const item: TimelineItems = {
  items: [
    {
      props: beachProps,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor}}>
            해운마루 횟집
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 9일 12시 38분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={haeunmaru} alt={"해운마루"}/>
        </div>
      )
    },
    {
      props: trainProps,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor}}>
            부산 스카이 캡슐
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 9일 13시 40분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={yeolcha} alt={"스카이 캡슐"}/>
        </div>
      )
    },
    {
      props: meatProps,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor}}>
            부산 곱창
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 9일 18시 5분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={gobchang} alt={"부산곱창"}/>
        </div>
      )
    },
    {
      props: sleepProps,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor}}>
            기억이 없다...
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 9일 22시~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={giuk} alt={"기억이..."}/>
        </div>
      )
    },
    {
      props: beachProps2,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor2}}>
            둘째날 해운마루!
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 10일 13시 14분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={haeunmaru2} alt={"해운마루 다시"}/>
        </div>
      )
    },
    {
      props: beachProps2,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor2}}>
            해운대 바다
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 10일 14시 17분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={haeundae} alt={"해운대"}/>
        </div>
      )
    },
    {
      props: beachProps2,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor2}}>
            광안리 바다
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 10일 18시 2분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={gwangan} alt={"광안리"}/>
        </div>
      )
    },
    {
      props: beachProps2,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor2}}>
            광안리 바다 2
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 10일 18시 3분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={gwangan2} alt={"광안리"}/>
        </div>
      )
    },
    {
      props: meatProps2,
      content: (
        <div>
          <h2 style={{fontSize: "1.5rem", color: wordColor2}}>
            광안리 바다 2
          </h2>
          <h4 style={{fontSize: ".8rem", textAlign: "right"}}>2021년 10월 10일 19시 11분~</h4>
          <img style={{maxWidth: "100%", borderRadius: ".3rem"}} src={chimac} alt={"치맥"}/>
        </div>
      )
    },
  ]
};

export default item;
