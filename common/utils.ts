/**
 * @name scrollDivToBottom
 * @description Quick util for scrolling our messages to the bottom.
 */
const scrollDivToBottom = (element: HTMLDivElement) => {
  const height = element.scrollHeight;

  element.scrollTo({
    left: 0,
    top: height
  });
};

export { scrollDivToBottom };
