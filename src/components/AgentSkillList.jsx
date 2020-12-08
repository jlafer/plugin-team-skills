import React from 'react';

const AgentSkillList = (props) => {
  const {skills} = props;
  //console.log('AgentSkillList.props', props);
  const skillStr = skills.join('  ');
  return (
    <div>
      {skillStr}
    </div>
  );
};

export default AgentSkillList;
