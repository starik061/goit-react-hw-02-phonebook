import PropTypes from 'prop-types';
import { StatisticsSection,StatisticsTitle, StatisticsList, StatisticsListItem } from "./Statistics.styled"

export const Statistics = ({ title, stats }) => {
    return <StatisticsSection>
      {title ? (<StatisticsTitle>{title}</StatisticsTitle>): undefined }
  <StatisticsList>
        {stats.map(statElement => {
          return (<StatisticsListItem key={statElement.id} style={{ backgroundColor:`${randomColor()}`}} >
      <span className="label">{statElement.label}</span>
      <span className="percentage">{statElement.percentage}%</span>
 </StatisticsListItem>)
   })}
        
  </StatisticsList>
</StatisticsSection>
}
function randomColor() {
   
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
  }

 