import React from "react";

type RatingPropsType = {
	value: number
}

export function Rating(props: RatingPropsType) {
  console.log("Rating");

if (props.value === 3) {
return ( <div>
 <Star selected={true}/>
<Star selected={true} />
<Star selected={true} />
<Star selected={true} />
<Star selected={true} />
</div>
);
}
if (props.value === 2) {
return ( <div>
 <Star selected={false}/>
<Star selected={true} />
<Star selected={true} />
<Star selected={true} />
<Star selected={true} />
</div>
);
}
if (props.value === 3) {
return ( <div>
 <Star selected={true}/>
<Star selected={true} />
<Star selected={true} />
<Star selected={true} />
<Star selected={true} />
</div>
);
}
  return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={true} />
    </div>
  );
}

type StarPropsType = {
	selected: boolean
}

function Star  (props: StarPropsType) {
  console.log("Star");
if (props.selected === true) {
 return   <span> <b>star</b>{" "}</span>
   } else {
		return <span>star</span>
	}
}
