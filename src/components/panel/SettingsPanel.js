import { useMessage } from '../../context/MessageContext';

export default function SettingsPanel() {
    const { message, setMessage } = useMessage();

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

  return (
    <div className="panel">
      <div className="settings-header">
        <p>Message</p>
      </div>
      <div className="settings-content">
        <p>Text</p>
        <textarea name="text" id="text" onChange={handleChange} value={message}/>
      </div>
    </div>
  );
}
