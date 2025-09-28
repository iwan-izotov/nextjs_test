FROM debian

# Surpresses debconf complaints of trying to install apt packages interactively
# https://github.com/moby/moby/issues/4032#issuecomment-192327844
ARG DEBIAN_FRONTEND=noninteractiv

# Копируем общие скрипты
COPY ./shared/ /tmp/scripts/
RUN chmod +x -R /tmp/scripts/

# Копируем общие скрипты для php-контейнеров
COPY ./nodejs/shared_scripts/ /tmp/php_scripts/
RUN chmod +x -R /tmp/php_scripts/

# Установка TIMEZONE
ARG TIMEZONE
RUN /tmp/scripts/install_timezone.sh ${TIMEZONE}

RUN apt-get update -y && apt-get upgrade -y

# Устанавливаем полезные утилиты
RUN /tmp/scripts/install_software.sh

# Устанавливаем nodejs и npm
RUN /tmp/php_scripts/install_nodejs_npm.sh

# Очистка
RUN /tmp/php_scripts/cleanup.sh

# Устанавливаем рабочую дерикторию
WORKDIR /var/www/project

# Устанавливаем подстветку bash
COPY ./shared/.bashrc /root/.bashrc

EXPOSE 9229
# ENTRYPOINT изменён на bash, так как изначально ENTRYPOINT заточен на запуск js-скрипта (данный вариант нас не устраивал)
ENTRYPOINT ["/bin/bash"]