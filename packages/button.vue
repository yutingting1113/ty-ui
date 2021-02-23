<template>
   <button class="y-button" :class="[`y-button--${type}`, {'is-plain': plain, 'is-round': round}]" @click="handleClick">
     <span><slot></slot></span>
   </button>
</template>

<script>
export default {
  name: 'YButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.type)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
  .y-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover, &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .y-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover, &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  .y-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover, &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  .y-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover, &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }
  .y-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover, &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }
  .y-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover, &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
  .y-button.is-plain {
    &:hover, &:focus {
      background: #fff;
      border-color: #409eff;
      color: #409eff;
    }
  }
  .y-button--primary.is-plain {
    color: #409eff;
    background-color: #ecf5ff;
    border-color: #b3d8ff;
    &:hover, &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
  .y-button--success.is-plain {
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #c2e7b0;
    &:hover, &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
  .y-button--info.is-plain {
    color: #909399;
    background-color: #f4f4f5;
    border-color: #d3d4d6;
    &:hover, &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .y-button--warning.is-plain {
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #f5dab1;
    &:hover, &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .y-button--danger.is-plain {
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fbc4c4;
    &:hover, &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
  .y-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
</style>
