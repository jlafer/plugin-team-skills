import React from 'react';
import { FlexPlugin, ColumnDefinition } from 'flex-plugin';

import AgentSkillList from './components/AgentSkillList';

const PLUGIN_NAME = 'TeamSkillsPlugin';

export default class TeamSkillsPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.WorkersDataTable.Content.add(
      <ColumnDefinition key="team" header={"Skills"} content={(item, context) => <AgentSkillList skills={item.worker.attributes.routing.skills} />} />
    );    
  }
}
