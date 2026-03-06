// CareerPage.tsx
import './CareerPage.css'

interface CareerLevel {
  id: number
  title: string
  description: string
  icon: string
  type: 'education' | 'work'
  cost: number // отрицательное = расход, положительное = доход
  status: 'locked' | 'available' | 'current' | 'completed'
  progress?: number
}

const careerLevels: CareerLevel[] = [
  {
    id: 1,
    title: 'Студент курсов',
    description: 'Изучаешь основы программирования, делаешь первые шаги в IT. HTML, CSS, JavaScript — всё с нуля.',
    icon: '📚',
    type: 'education',
    cost: -150,
    status: 'available'
  },
  {
    id: 2,
    title: 'Junior Developer',
    description: 'Первое место работы! Пишешь простые задачи под присмотром ментора. Наконец-то первая зарплата.',
    icon: '💻',
    type: 'work',
    cost: 800,
    status: 'locked'
  },
  {
    id: 3,
    title: 'Middle Developer',
    description: 'Самостоятельно решаешь задачи средней сложности. Участвуешь в код-ревью и архитектурных обсуждениях.',
    icon: '🚀',
    type: 'work',
    cost: 2500,
    status: 'locked'
  },
  {
    id: 4,
    title: 'Senior Developer',
    description: 'Ведёшь проекты, менторишь младших коллег. Ты — главный по техническим решениям в команде.',
    icon: '👑',
    type: 'work',
    cost: 5500,
    status: 'locked'
  },
  {
    id: 5,
    title: 'Team Lead',
    description: 'Управляешь командой разработчиков. 50% кодинга, 50% менеджмента. Отвечаешь за результат всей команды.',
    icon: '🎯',
    type: 'work',
    cost: 8500,
    status: 'locked'
  },
  {
    id: 6,
    title: 'CTO / Tech Director',
    description: 'Определяешь техническую стратегию компании. Выбираешь стек, процессы и направление развития.',
    icon: '🏢',
    type: 'work',
    cost: 15000,
    status: 'locked'
  },
  {
    id: 7,
    title: 'Сооснователь стартапа',
    description: 'Создаёшь собственную компанию! Инвестиции, команда, продукт. Высокий риск — высокая награда.',
    icon: '🦄',
    type: 'work',
    cost: 35000,
    status: 'locked'
  },
  {
    id: 8,
    title: 'Владелец IT-империи',
    description: 'Твоя компания — мировой лидер. Продукты используют миллионы. Ты меняешь индустрию.',
    icon: '🌍',
    type: 'work',
    cost: 100000,
    status: 'locked'
  }
]

function formatMoney(amount: number): string {
  const absAmount = Math.abs(amount)
  if (absAmount >= 1000) {
    return `$${(absAmount / 1000).toFixed(absAmount % 1000 === 0 ? 0 : 1)}k`
  }
  return `$${absAmount}`
}

export function CareerPage() {
  const availableLevel = careerLevels.find(l => l.status === 'available')
  const currentLevel = careerLevels.find(l => l.status === 'current')
  const completedCount = careerLevels.filter(l => l.status === 'completed').length

  return (
    <div className="career-page">
      <header className="career-header">
        <h1 className="career-header__title">🎮 Карьерный путь</h1>
        <p className="career-header__subtitle">От студента до владельца IT-империи</p>
        
        <div className="career-stats">
          <div className="career-stat">
            <span className="career-stat__value">{completedCount}/{careerLevels.length}</span>
            <span className="career-stat__label">Пройдено</span>
          </div>
          <div className="career-stat">
            <span className="career-stat__value">
              {currentLevel?.title || availableLevel?.title || '—'}
            </span>
            <span className="career-stat__label">
              {currentLevel ? 'Текущий' : availableLevel ? 'Доступен' : 'Завершено'}
            </span>
          </div>
        </div>
      </header>

      <div className="career-path">
        {careerLevels.map((level) => (
          <div 
            key={level.id} 
            className={`career-level level-${level.id} level--${level.status}`}
          >
            <div className={`level-card level-card--${level.status}`}>
              <div className="level-icon">
                <span>{level.icon}</span>
                {level.status === 'completed' && (
                  <span className="level-icon__badge">✓</span>
                )}
                {level.status === 'available' && (
                  <span className="level-icon__start">▶</span>
                )}
                {level.status === 'locked' && (
                  <span className="level-icon__lock">🔒</span>
                )}
              </div>

              <div className="level-content">
                <div className="level-header">
                  <h3 className="level-title">{level.title}</h3>
                  <span className={`level-badge level-badge--${level.type}`}>
                    {level.type === 'education' ? 'Обучение' : 'Работа'}
                  </span>
                </div>

                <p className="level-description">{level.description}</p>

                <div className="level-footer">
                  <div className={`level-cost ${level.cost < 0 ? 'level-cost--expense' : 'level-cost--income'}`}>
                    <span className="level-cost__icon">
                      {level.cost < 0 ? '💸' : '💰'}
                    </span>
                    <span>
                      {level.cost < 0 ? 'Стоимость: ' : 'Доход: '}
                      {formatMoney(level.cost)}/мес
                    </span>
                  </div>

                  {level.status === 'available' && (
                    <button className="level-button level-button--start">
                      Начать обучение 🚀
                    </button>
                  )}
                  
                  {level.status === 'current' && (
                    <button className="level-button level-button--work">
                      Работать 💪
                    </button>
                  )}
                  
                  {level.status === 'completed' && (
                    <button className="level-button level-button--completed" disabled>
                      Пройдено ✓
                    </button>
                  )}
                  
                  {level.status === 'locked' && (
                    <button className="level-button level-button--locked" disabled>
                      🔒 Заблокировано
                    </button>
                  )}
                </div>

                {level.status === 'current' && level.progress !== undefined && (
                  <div className="level-progress">
                    <div className="level-progress__header">
                      <span>Прогресс уровня</span>
                      <span>{level.progress}%</span>
                    </div>
                    <div className="level-progress__bar">
                      <div 
                        className="level-progress__fill" 
                        style={{ width: `${level.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}