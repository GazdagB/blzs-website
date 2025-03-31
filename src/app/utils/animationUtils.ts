



export const animateRight = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          scale: 1,
          transform: 'translateX(0)'
        },
        {
          opacity: 0.5,
          scale: 0.9,
          transform: "translateX(-50%)"
        }
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76,0,0.24,1)",
        fill: "forwards",
        pseudoElement: '::view-transition-old(root)',
      }
    )
  
    document.documentElement.animate(
      [
        {
          transform: 'translateX(100%)'
        },
        {
          transform: "translateX(0)"
        }
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76,0,0.24,1)",
        fill: "forwards",
        pseudoElement: '::view-transition-new(root)',
      }
    )
  }
  
  export const animateDown = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          scale: 1,
          transform: 'translateY(0)'
        },
        {
          opacity: 0.5,
          scale: 0.9,
          transform: "translateY(-50%)"
        }
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76,0,0.24,1)",
        fill: "forwards",
        pseudoElement: '::view-transition-old(root)',
      }
    )
  
    document.documentElement.animate(
      [
        {
          transform: 'translateY(100%)'
        },
        {
          transform: "translateY(0)"
        }
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76,0,0.24,1)",
        fill: "forwards",
        pseudoElement: '::view-transition-new(root)',
      }
    )
  }
  
  export const animateLeft = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          scale: 1,
          transform: 'translateX(0)'
        },
        {
          opacity: 0.5,
          scale: 0.9,
          transform: "translateX(50%)"
        }
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76,0,0.24,1)",
        fill: "forwards",
        pseudoElement: '::view-transition-old(root)',
      }
    )
  
    document.documentElement.animate(
      [
        {
          transform: 'translateX(-100%)'
        },
        {
          transform: "translateX(0)"
        }
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76,0,0.24,1)",
        fill: "forwards",
        pseudoElement: '::view-transition-new(root)',
      }
    )
  }

  type Direction = "left" | "down" | "right";

const animations: Record<Direction, () => void> = {
  left: animateLeft,
  right: animateRight,
  down: animateDown
};

export const animate = (direction: Direction): void => {
  const animation = animations[direction];
  if (animation) {
    animation();
  }
};