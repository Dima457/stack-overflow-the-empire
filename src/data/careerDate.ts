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

export const careerLevels: CareerLevel[] = [
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

