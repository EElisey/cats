import styled from "styled-components";

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: left;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  margin-top: 10px;
`;

interface ControlsProps {
  onRefresh: () => void;
  enabled: boolean;
  onToggleEnabled: () => void;
  autoRefresh: boolean;
  onToggleAutoRefresh: () => void;
  isLoading: boolean;
}

export const Controls = ({
  onRefresh,
  enabled,
  onToggleEnabled,
  autoRefresh,
  onToggleAutoRefresh,
  isLoading,
}: ControlsProps) => {
  return (
    <ControlsContainer>
      <CheckboxContainer>
        <input type="checkbox" checked={enabled} onChange={onToggleEnabled} />
        <span>Enabled</span>
      </CheckboxContainer>

      <CheckboxContainer>
        <input
          type="checkbox"
          checked={autoRefresh}
          onChange={onToggleAutoRefresh}
          disabled={!enabled || isLoading}
        />
        <span>Auto-refresh every 5 seconds</span>
      </CheckboxContainer>
      <button
        onClick={onRefresh}
        disabled={!enabled || isLoading}
        style={{ cursor: "pointer", height: "50px" }}
      >
        Get Cat
      </button>
    </ControlsContainer>
  );
};
