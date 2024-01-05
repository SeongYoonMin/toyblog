interface IBoard {
  title: string;
  name: string;
  date: string;
  tag?: string;
  content: string;
}
interface IBoardItems extends IBoard {
  id: number;
}

interface ISearchDf {
  server: string;
  character: string;
}

interface IDfServerList {
  id: number;
  name: string;
  value: string;
}
interface ISearchDfChar {
  serverId: string;
  characterId: string;
  characterName: string;
  level: number;
  jobId: string;
  jobGrowId: string;
  jobName: string;
  jobGrowName: string;
  fame: number;
}
interface ISearchDfCharList {
  rows: ISearchDfChar[];
}

interface IDfCharInfo {
  adventureName: string;
  characterId: string;
  characterName: string;
  guildId?: string;
  guildName?: string;
  jobGrowId: string;
  jobGrowName: string;
  jobId: string;
  jobName: string;
  level: number;
}

// 배열로 선언
interface IDfCharStatusList extends IDfCharInfo {
  buff: IDfCharBuff[];
  status: IDfCharStatus[];
}
interface IDfCharStatus {
  name: string;
  value: number;
}
interface IDfCharBuff {
  name: string;
  level?: number;
  status: {
    name: string;
    value: number;
  }[];
}

interface IDfCharEquipment extends IDfCharInfo {
  equipment: IDfEquipment[];
}
interface IDfEquipment {
  amplificationName?: string;
  fixedOption?: {
    buff: number;
    damage: number;
    expRate: number;
    explain: string;
    explainDetail: string;
    level: number;
  };
  enchant?: {
    status: {
      name: string;
      value: string;
    }[];
  };
  itemAvailableLevel: number;
  itemGradeName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  itemType: string;
  itemTypeId: string;
  itemTypeDetail: string;
  itemTypeDetailId: string;
  refine: number;
  reinforce: number;
  setItemId?: string;
  setItemName?: string;
  slotId: string;
  slotName: string;
}

interface IDfCharAvatar extends IDfCharInfo {
  avatar: IDfAvatar[];
}
interface IDfAvatar {
  clone: {
    itemId?: string;
    itemName?: string;
  };
  emblems: {
    slotNo?: number;
    slotColor?: string;
    itemsName?: string;
    itemRarity?: string;
  }[];
  itemId: string;
  itemName: string;
  itemRarity: string;
  optionAbility: string;
  slotId: string;
  slotName: string;
}

interface IDfCharCreature extends IDfCharInfo {
  creature: IDfCreature;
}
interface IDfCreature {
  artifact: {
    slotColor: string;
    itemId: string;
    itemName: string;
    itemAvailableLevel: number;
    itemRarity: string;
  }[];
  clone: {
    itemId?: string;
    itemName?: string;
  };
  itemId: string;
  itemName: string;
  itemRarity: string;
}

interface IDfCharFlag extends IDfCharInfo {
  flag: IDfFlag;
}
interface IDfFlag {
  gems: {
    slotNo?: number;
    itemId?: string;
    itemName?: string;
    itemRarity?: string;
  }[];
  itemId: string;
  itemName: string;
  itemRarity: string;
  reinforce: number;
  reinforceStatus?: string;
}

interface IDfCharTalisman extends IDfCharInfo {
  talismans: IDfTalisman[];
}
interface IDfTalisman {
  runes: {
    slotNo?: number;
    itemId?: string;
    itemName: string;
  }[];
  talisman: {
    slotNo?: number;
    itemId: string;
    itemName: string;
    runeTypes: string[];
  };
}

interface IDfCharBuffEquip extends IDfCharInfo {
  skill: {
    buff: IDfBuffEquip;
  };
}
interface IDfBuffEquip {
  skillInfo: {
    skillId: string;
    name: string;
    detail?: string;
    option: {
      level: number;
      desc: string;
      values: string[];
    };
  };
  equipment: {
    slotId: string;
    slotName: string;
    itemId: string;
    itemName: string;
    itemTypeId: string;
    itemType: string;
    itemTypeDetailId: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
    itemRarity: string;
    setItemId: string;
    setItemName: string;
    reinforce: number;
    amplificationName: any;
    refine: number;
    enchant?: {
      reinforceSkill: {
        jobId: string;
        jobName: string;
        skils: {
          skillId: string;
          name: string;
          value: number;
        }[];
      }[];
    };
  }[];
}

interface IDfCharBuffAvatar extends IDfCharInfo {
  skill: {
    buff: IDfBuffAvatar;
  };
}
interface IDfBuffAvatar {
  skillInfo: {
    skillId: string;
    name: string;
    option: {
      level: number;
      desc: string;
      values: string[];
    };
  };
  avatar: {
    slotId: string;
    slotName: string;
    itemId: string;
    itemName: string;
    itemRarity: string;
    cloneAvatarName: string;
    optionAbility: string;
    emblems: {
      slotNo: number;
      slotColor: string;
      itemName: string;
      itemRarity: string;
    }[];
  }[];
}

interface IDfCharBuffCreature extends IDfCharInfo {
  skill: {
    buff: IDfBuffCreature;
  };
}
interface IDfBuffCreature {
  skillInfo: {
    skillId: string;
    name: string;
    option: {
      level: number;
      desc: string;
      values: string[];
    };
  };
  creature: {
    itemId: string;
    itemName: string;
    itemRarity: string;
    enchant?: {
      reinforceSkill: {
        jobId: string;
        jobName: string;
        skils: {
          skillId: string;
          name: string;
          value: number;
        }[];
      }[];
    };
  }[];
}

interface IDfRarityColors {
  id: number;
  rarity: string;
  colorCode: string;
}

interface IGetMapleInfo {
  character_class: string;
  character_class_level: string;
  character_exp: number;
  character_exp_rate: string;
  character_gender: string;
  character_guild_name: string;
  character_image: string;
  character_level: number;
  character_name: string;
  date: string;
  world_name: string;
}