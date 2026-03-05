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
    return(
        <div className="mode-switcher">
            {title&& <h3 className="mode-switcher__title">{title}</h3>}
             <div className="mode-switcher__container">
                
             </div>
        </div>
    )
}