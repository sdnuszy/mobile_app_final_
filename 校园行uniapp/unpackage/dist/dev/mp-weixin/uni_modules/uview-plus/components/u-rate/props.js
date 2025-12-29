"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 用于v-model双向绑定选中的星星数量
    modelValue: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.value
    },
    // 要显示的星星数量
    count: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.count
    },
    // 是否不可选中
    disabled: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.disabled
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.readonly
    },
    // 星星的大小，单位px
    size: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.size
    },
    // 未选中时的颜色
    inactiveColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.inactiveColor
    },
    // 选中的颜色
    activeColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.activeColor
    },
    // 星星之间的间距，单位px
    gutter: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.gutter
    },
    // 最少能选择的星星个数
    minCount: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.minCount
    },
    // 是否允许半星
    allowHalf: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.allowHalf
    },
    // 选中时的图标(星星)
    activeIcon: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.activeIcon
    },
    // 未选中时的图标(星星)
    inactiveIcon: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.inactiveIcon
    },
    // 是否可以通过滑动手势选择评分
    touchable: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.rate.touchable
    }
  }
});
exports.props = props;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-plus/components/u-rate/props.js.map
