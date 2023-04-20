import React,{ useRef, useEffect } from "react";

function Post(){
    const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset;
        if (window.scrollY > top) {
          element.style.position = 'fixed';
          element.style.top = '0';
        } else {
          element.style.position = 'static';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref}>
      <div style={{height : 1000,backgroundColor : "red"}}>box</div>
    </div>
  );
}
export default Post;