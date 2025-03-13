import './ButtonSee.css';

const ButtonSee = () => {
  return (
    <button class="button" data-text="Awesome">
      <span class="actual-text">&nbsp;kafka&nbsp;</span>
      <span aria-hidden="true" class="hover-text">
        &nbsp;Kafka&nbsp;
      </span>
    </button>
  );
};
export default ButtonSee;
