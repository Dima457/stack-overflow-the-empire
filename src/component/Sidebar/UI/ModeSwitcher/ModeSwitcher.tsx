import './ModeSwitcher.css';

interface Mode {
  id: string;
  label: string;
  icon?: string;
}

interface ModeSwitcherProps {
  modes: Mode[];
  activeMode: string;
  onModeChange: (modeId: string) => void;
  title?: string;
}

export function ModeSwitcher({ modes, activeMode, onModeChange, title }: ModeSwitcherProps) {
  return (
    <div className="mode-switcher">
      {title && <h3 className="mode-switcher__title">{title}</h3>}
      <div className="mode-switcher__container">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className={`mode-switcher__button ${
              activeMode === mode.id ? 'mode-switcher__button--active' : ''
            }`}
            onClick={() => onModeChange(mode.id)}
          >
            {mode.icon && <span className="mode-switcher__icon">{mode.icon}</span>}
            <span className="mode-switcher__label">{mode.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}