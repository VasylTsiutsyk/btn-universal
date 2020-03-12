<template>
  <div class="home">
    <BtnUniversal
      :size="'small'"
      :color="'red'"
      :disabled="true"
    >
      Small red btn
    </BtnUniversal>

    <BtnUniversal
      :size="'large'"
      :color="'black'"
      :icon="'spinner'"
    >
      Large black btn
    </BtnUniversal>

    <BtnUniversal
      :color="'green'"
    >
      Ordinary green btn
    </BtnUniversal>

    <BtnUniversal
      :color="'yellow'"
      @click="callback"
      :icon="'chart-bar'"
    >
      Ordinary green btn
    </BtnUniversal>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
};
</script>
