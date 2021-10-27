import {
  VerticalTimeline,
  VerticalTimelineElement,
  VerticalTimelineElementProps
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export interface TimelineItem {
  props: VerticalTimelineElementProps,
  content: React.ReactNode,
}

export interface TimelineItems {
  items: TimelineItem[]
}

const Timeline: React.FC<TimelineItems> = ({items}) => {
  if (items === undefined) {
    return <VerticalTimeline/>
  }
  return (<VerticalTimeline>
    {
      items.map(item => (
        <VerticalTimelineElement {...item.props}>
          {item.content}
        </VerticalTimelineElement>
      ))
    }
  </VerticalTimeline>)
}

export default Timeline;
