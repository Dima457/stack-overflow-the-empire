
import '../../pages/LifePage/LifePage.css'


// Типизация
interface ProgressItemData {
  id?: string | number;
  icon: React.ReactNode;
  title: string;
  current: number;
  total: number;
}

interface ProgressListProps {
  items: ProgressItemData[];
  
}
// Данные
export const  collectionData = [
  { icon: "🪙", title: "Монеты", current: 0, total: 23 },
  { icon: "🎨", title: "Картины", current: 0, total: 45 },
  { icon: "💎", title: "Уникальные предметы", current: 0, total: 15 },
  { icon: "🚗", title: "Ретро автомобили", current: 0, total: 30 },
  { icon: "👑", title: "Драгоценности", current: 0, total: 30 },
  { icon: "🗳️", title: "Марки", current: 0, total: 30 },
];
export const ThingsForLifePage = ({items}:ProgressListProps)=>{
    return(
        <>
        { items.map((item)=>(
            <div className="collection-card">
            <div className="collection-card__icon">{item.icon}</div>
            <div className="collection-card__title">{item.title}</div>
            <div className="collection-card__progress">{item.current} из {item.total}</div>
          </div>
        ))
            
        }
        </>
        
    )
}