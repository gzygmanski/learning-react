import React from "react"

function Link({ href, name }){
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, '', href)

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return(
    <a onClick={onClick} href={href} className="item">{name}</a>
    )
}

export default Link
