export default function TabsSection({active, onChange}) {
    return (
    <section>
        <button className={active === 'intro' ? "button active" : "button"} onClick={() => onChange('intro')}>Интро</button>
        <button className={active === 'learning' ? "button active" : "button"} onClick={() => onChange('learning')}>Обучение</button>
        <button className={active === 'differences' ? "button active" : "button"} onClick={() => onChange('differences')}>Чем мы отличаемся?</button>
    </section>
    )
}