import DOMPurify from 'dompurify';

const SanitizeHTML = ({ dirty }) => {
  const purified = DOMPurify.sanitize(dirty, {
    USE_PROFILES: { html: true, svg: true },
    FORBID_TAGS: ['script'],
  });
  const removed = DOMPurify.removed;
  // console.log({ dirty, purified, removed })
  return <div dangerouslySetInnerHTML={{ __html: purified }} />;
};

export default SanitizeHTML;
