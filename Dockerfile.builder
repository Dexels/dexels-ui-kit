FROM node:12

ADD entrypoint.sh /entrypoint.sh
CMD ["/entrypoint.sh"]
